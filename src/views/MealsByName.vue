<template>
<div class="p-8">
    <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search For Meals" @change="searchMeals" />

</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="idMeal" class="bg-white shadow rounded-xl">
      <router-link to="/">
        <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover" />
      </router-link>  
        <div class="p-3">
            <h3 class="font-bold">{{meal.strMeal}}</h3>
            <p>Lorem ipsum dolor sit amet cque iusto nobis vero possimus impedit officiis, numquam eveniet magni tenetur.</p>
            <div class="flex items-center justify-between">
                <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-500 bg-red-500 text-white hover:bg-red-400 transition-colors">Youtube</a>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {computed} from '@vue/reactivity';
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import store from '../store';

const keyword = ref('');
const route = useRoute();
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
    keyword.value = route.params.name // if we write meal name in url it will come up in the search field
    if(keyword.value){     //when it gets the meal name, it then call the searchMeal and brings the data of the particular meal
        searchMeals();
    }
})
</script>
