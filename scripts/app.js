import { indexCustomers } from './api.js'

indexCustomers()
	.then((res) => res.json())
	.then(console.log)
	.catch(console.error)