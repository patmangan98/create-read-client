const indexCustomerContainer = document.querySelector('#index-customer-container')
const messageContainer = document.querySelector('#message-container')
const showCustomerContainer = document.querySelector('#show-customer-container')

export const onIndexCustomerSuccess = (customers) => {
    customers.forEach((customer) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${customer.firstName} ${customer.lastName} </h3>
        <h2>${customer.contact}</h2> 
        <button data-id="${customer._id}">Show Customer</button>  
        `
        indexCustomerContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}

export const onCreateCustomerSuccess = () => {
    messageContainer.innerText = 'You have created a new customer'
  }

export const onShowCustomerSuccess = (customer) => {
    const div = document.createElement('div')
	div.innerHTML = `
        <h3>${customer.firstName} ${customer.lastName}</h3>
        <p>${customer.class}</p>
        <p>${customer.contact}</p>
        <p>${customer._id}</p>

        <form data-id="${customer._id}">
        <input type="text" name="firstName" value="${customer.firstName}">
        <input type="text" name="lastName" value="${customer.lastName}">
        <input type="text" name="contact" value="${customer.contact}">
        <input type="text" name="description" value="${customer.description}">
        <input type="submit" value="Update Customer">
        </form>

        <button data-id="${customer._id}">Delete Customer</button>
    `
	showCustomerContainer.appendChild(div)
}

export const onUpdateCustomerSuccess = () => {
    messageContainer.innerText = 'Update was successful'
}

export const onDeleteCustomerSuccess = () => {
    messageContainer.innerText = 'Update was successful'
}