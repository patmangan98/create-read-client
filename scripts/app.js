import { indexCustomers, createCustomer, showCustomer } from './api.js'

import { onIndexCustomerSuccess, onFailure, onCreateCustomerSuccess, } from './ui.js'

const createCustomerForm = document.querySelector('#create-customer-form')
const showCustomerContainer = document.querySelector('#show-customer-container')

indexCustomers()
	.then((res) => res.json())
    .then((res) => onIndexCustomerSuccess(res.customers))
	.catch(onFailure)

createCustomerForm.addEventListener('submit', (event) => {
    event.preventDefault()
      const customerData = {
          customer: {
              firstName: event.target['firstName'].value,
              lastName: event.target['lastName'].value,
              contact: event.target['contact'].value,
              description: event.target['description'].value,
            },
        }
    createCustomer(customerData)
        .then(onCreateCustomerSuccess)
        .catch(onFailure)
})

showCustomerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showCustomer(id)
		.then((res) => res.json())
		.then(res => {
            onShowCustomerSuccess(res.customer)
        })
		.catch(onFailure)
})

