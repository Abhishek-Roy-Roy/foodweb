const searchBtn= document.getElementById('searchBtn');


const mealContainer= document.getElementById('meals')







searchBtn.addEventListener('click',getmeal)

function getmeal(){
    const searchInput= document.getElementById('searchInput').value;
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then (res=> res.json())

    .then(data=> showmeal(data.meals))
    
}
function showmeal(meals){
    let html= " ";
    meals.forEach(meal=> {


        html +=`

            

    
            <div class="meal-iteam">
     
                <div class="meal-img" >
                    <img src="${meal.strMealThumb}" alt="">
        
                </div>
                <div>
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="btn-recipi"> Get Recipe</a>
                </div>
            </div>

         `

        
            
    


    




    })


    mealContainer.innerHTML= html;
}

