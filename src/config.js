let config = {}

export function setConfig(newConfig) {
  config = newConfig
}

export function getConfig() {
  return config
}

// Load the configuration from config.json
async function loadConfig() {
  try {
    //dev
    // const response = {
    //     "apiUrl": "http://192.168.100.82:8000",
    //     "apiKey": "nonepassword"
    // };

    // const data = response

    //production
    const response = await fetch(import.meta.env.BASE_URL + 'config.json')

    const data = await response.json()

    setConfig(data)
  } catch (error) {
    console.error('Failed to load config.json:', error)
  }
}

loadConfig()
