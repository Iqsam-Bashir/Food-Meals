<template>
<div class="p-8 pb-0">
    <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search For Meals" @change="searchMeals" />

</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
</div>
</template>

<script setup>
import {computed} from '@vue/reactivity';
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import store from '../store';
import MealItem from '../components/MealItem.vue'

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
