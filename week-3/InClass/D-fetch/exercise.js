/*
================
1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude) 
   and a button with the text GET.
3. When you click in the button, you should use fetch function to get
  information from the URL 
     https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 
  with user latitude and longitude.
4. When you get the response from the server,
   print the current temperature in an <h3> marker.
5. Validate the form when you click on the button,
   if the inputs are empty or ar not numeric, show a warning message
================
*/
// 1. done
// 2. done
// 3. done
// 4. done
// 5. TODO
document.getElementById(`submitButton`).addEventListener(`click`, event => {
    event.preventDefault()
    const latitud = document.getElementById(`latitudTextField`).value
    const longitud = document.getElementById(`longituTextField`).value
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitud}&lon=${longitud}`
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const h3 = document.createElement(`h3`)
        h3.innerText = data.main.temp
        document.querySelector(`body`).appendChild(h3)
        console.log(`ya tengo la respuesta`)
      })
      .catch(variable => console.log(variable))
      .finally(variable => console.log(variable))
      // TODO mimrarse que hacen las siguientes funciones
      // .catch
      // .finally
  
  }) // addEventListener