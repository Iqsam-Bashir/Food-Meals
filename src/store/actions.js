import axiosClient from "../axiosClient"
export function searchMeals( {commit}, keyword ){
 axiosClient.get(`search.php?s=${keyword}`)
 .then(({data}) =>{
    commit('setSearchedMeals', data.meals) 
    console.log(data.meals) // we commit the mutation to save the recieved data inside the store. here we pass the name of the mutation
 })

}

