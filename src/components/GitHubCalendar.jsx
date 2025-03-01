import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const GitHubCalendar = ({ username }) => {
  const [contributionData, setContributionData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch actual GitHub contribution data
    // For this demo, we'll generate mock data
    const generateMockData = () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const mockData = months.map(month => ({
        name: month,
        contributions: Math.floor(Math.random() * 100) + 10
      }))
      return mockData
    }

    try {
      // Simulate API call delay
      setTimeout(() => {
        const data = generateMockData()
        setContributionData(data)
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
      <h3 className="text-xl font-semibold mb-4">Contribution Activity for {username}</h3>
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
        Note: This is simulated data for demonstration purposes.
      </div>
    </div>
  )
}

export default GitHubCalendar