export const indexCustomers = () => {
    return fetch(`http://localhost:3001/customers`)
  }
  export const createCustomer = (data) => {
    return fetch(`http://localhost:3001/customers`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export const showCustomer = (id) => {
    return fetch(`http://localhost:3001/customers/${id}`)
  }