<template>
<div>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter' , params: {letter}}" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div>
        <!-- <pre>
            {{ meals }}
        </pre> -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
        </div>
    </div>
</div>
</template>

<script setup>
 import {computed} from '@vue/reactivity';
 import {onMounted} from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>
