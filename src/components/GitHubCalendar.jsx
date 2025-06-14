import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// Use import.meta.env for Vite or similar setups
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const GitHubCalendar = ({ username }) => {
  const [contributionData, setContributionData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalContributions, setTotalContributions] = useState(0)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const today = new Date()
        const lastYear = new Date()
        lastYear.setFullYear(today.getFullYear() - 1)
        const from = lastYear.toISOString()
        const to = today.toISOString()

        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query,
            variables: { username, from, to },
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data')
        }
        const data = await response.json()
        if (data.errors) {
          throw new Error(data.errors[0].message)
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar
        setTotalContributions(calendar.totalContributions)

        // Aggregate by month
        const monthlyContributions = {}
        calendar.weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            const date = new Date(day.date)
            const month = date.toLocaleString('default', { month: 'short', year: '2-digit' })
            monthlyContributions[month] = (monthlyContributions[month] || 0) + day.contributionCount
          })
        })

        // Get last 12 months in order
        const months = []
        for (let i = 11; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth() - i, 1)
          months.push(d.toLocaleString('default', { month: 'short', year: '2-digit' }))
        }
        const chartData = months.map(month => ({
          name: month,
          contributions: monthlyContributions[month] || 0,
        }))

        setContributionData(chartData)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch GitHub contribution data')
        setLoading(false)
        console.error(err)
      }
    }
    fetchGitHubData()
  }, [username])

  if (loading) {
    return <div className="text-center py-8">Loading contribution data...</div>
  }
  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded shadow-md">
          <p className="font-medium">{label}</p>
          <p className="text-primary-light dark:text-primary-dark">
            {`${payload[0].value} contributions`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Last Year's Contribution Activity for {username}</h3>
      <p className="text-center mb-4 text-gray-600 dark:text-gray-400">
        Total Contributions: {totalContributions}
      </p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={contributionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="contributions" 
              fill="var(--color-primary-light)" 
              className="fill-primary-light dark:fill-primary-dark" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GitHubCalendar
