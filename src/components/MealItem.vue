<template>
    <div  class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails',  params: {id: meal.idMeal}}">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
        </router-link>  
          <div class="p-3">
              <h3 class="font-bold">{{meal.strMeal}}</h3>
              <p>Lorem ipsum dolor sit amet cque iusto nobis vero possimus impedit officiis, numquam eveniet magni tenetur.</p>
              <div class="flex items-center justify-between">
                  <a :href="meal.strYoutube" target="_blank"> <img :src="img" class="w-[50px]"> </a>
              </div>
          </div>
      </div>
</template>
<script setup>
import img from '../assets/Images/youtube-icon.png'
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>