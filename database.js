let users = [
  { id: "1", 
  name: "Olive Yew",
  bio: "Not Tarzan's Wife, another Jane"},

  { id: "2",
   name: "Patty O'Furniture",
  bio: "Unable to type with boxing gloves on." },

  { id: "3", 
  name: "Aida Bugg",
  bio: "Typical reader. Tv lover. Food evangelist."
 },

  { id: "4",
   name: "Teri Dactyl",
  bio: "Total social media junkie."},

  { id: "5", 
  name: "Peg Legge",
  bio: "Total pop culture nerd."},
    
]

function find() {
	return users
}

function findById(id) {
	return users.find(u => u.id === id)
}

function insert(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function update(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function remove(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	find,
	findById,
	insert,
	update,
	remove,
}