import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const GitHubCalendar = ({ username }) => {
  const [contributionData, setContributionData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fixed data based on 253 contributions
    const fixedContributionData = [
      { name: 'Jan', contributions: 20 },
      { name: 'Feb', contributions: 18 },
      { name: 'Mar', contributions: 25 },
      { name: 'Apr', contributions: 30 },
      { name: 'May', contributions: 22 },
      { name: 'Jun', contributions: 28 },
      { name: 'Jul', contributions: 24 },
      { name: 'Aug', contributions: 26 },
      { name: 'Sep', contributions: 20 },
      { name: 'Oct', contributions: 20 },
      { name: 'Nov', contributions: 10 },
      { name: 'Dec', contributions: 10 },
    ]

    try {
      setTimeout(() => {
        setContributionData(fixedContributionData)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('Failed to fetch GitHub contribution data')
      setLoading(false)
    }
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
      <h3 className="text-xl font-semibold mb-4">Contribution Activity for pavan77749</h3>
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
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Note: Data is based on a fixed contribution count of 253.
      </div>
    </div>
  )
}

export default GitHubCalendar
