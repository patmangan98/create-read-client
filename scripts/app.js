import { indexCustomers, createCustomer, showCustomer, updateCustomer, deleteCustomer } from './api.js'

import { 
    onIndexCustomerSuccess, 
    onFailure, 
    onCreateCustomerSuccess, 
    onShowCustomerSuccess,
    onUpdateCustomerSuccess,
    onDeleteCustomerSuccess 
} from './ui.js'

const createCustomerForm = document.querySelector('#create-customer-form')
const indexCustomerContainer = document.querySelector('#index-customer-container')
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

indexCustomerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showCustomer(id)
		.then((res) => res.json())
        // .then(console.log)
		.then(res => {
            onShowCustomerSuccess(res.customer)
        })
		.catch(onFailure)
})

showCustomerContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const customerData = {
		customer: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			strength: event.target['contact'].value,
			class: event.target['description'].value,
		},
	}
	updateCustomer(customerData, id)
		.then(onUpdateCustomerSuccess)
		.catch(console.error)
})

showCustomerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCustomer(id)
		.then(onDeleteCustomerSuccess)
		.catch(onFailure)
})