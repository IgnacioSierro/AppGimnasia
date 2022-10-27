import axios from 'axios'

const getAllMembers = async (state) => {
    const members = await axios.get("http://my-json-server.typicode.com/IgnacioSierro/AppGimnasia/db")
    state(members.data.members)
}

const getMemberByName = async (state, name) => {
    const members = await axios.get(`http://my-json-server.typicode.com/IgnacioSierro/AppGimnasia/members?name=${name}`)
    console.log(members)
    state(members)
}

const getAllSponsors = async (state) => {
    const sponsors = await axios.get("http://my-json-server.typicode.com/IgnacioSierro/AppGimnasia/db")
    state(sponsors.data.sponsors)
}

export {
    getAllMembers,
    getAllSponsors,
    getMemberByName,
}