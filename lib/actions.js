<<<<<<< HEAD
"use server";

export async function shareMeal(formData) {
=======
'use server';

import { saveMeal } from './meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal( prevState,formData) {
>>>>>>> 27252f336b17661423d25eab231724de9fb562b8
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

<<<<<<< HEAD
  console.log(meal);
=======
  if(isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || isInvalidText(meal.creator) 
    || isInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
    return {
      message: ""
    }
  }

  await saveMeal(meal);
  redirect('/meals');

>>>>>>> 27252f336b17661423d25eab231724de9fb562b8
}