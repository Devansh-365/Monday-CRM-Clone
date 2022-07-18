const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const { response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://bef10608-3a56-4e0f-b788-21318fdafb45-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:ImDCeDShsZJNHbwhOFypnuMf:8d6e604cee59f58bcbc7fd1fcc34d764f1189a5e133a16800b3c37eabc33cc4f'

app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
          Accepts: 'application/json',
          'X-Cassandra-Token': token,
        }
      }
      try {
        const response = await axios(`${url}?page-size=20`,options)
        res.status(200).json(response.data)
      } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
      }
})


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData
  
    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json',
      },
      data: formData,
    }
  
    try {
      const response = await axios(url, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
})

app.delete('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId

  const options = {
    method: 'DELETE',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  }

  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
})

app.listen(PORT,() => console.log('server running on port '+ PORT))