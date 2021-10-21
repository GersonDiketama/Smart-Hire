export const url = "http://localhost:8088"

const recruiterManager = 
{
    getEmployersResquests: () =>
    {
        return fetch(`${url}/employerRequests`)
        .then(res => res.json())
    },

    getEmployersResquestsById : (employerRequestId) =>
    {
        return fetch(`${url}/employerRequests/${employerRequestId}`)
        .then(res => res.json())
    }
}

export default recruiterManager