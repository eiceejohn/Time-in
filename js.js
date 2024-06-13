
const scriptURL = 'https://script.google.com/macros/s/AKfycbzn6Zeg7CnVBWDxjth0j9n71YkscQFgT7C8BXWgOfwTAyE2TKRjhm5iLkLp7JHSe7YJNA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  document.getElementById('clock').value = strTime;
}

setInterval(updateTime, 1000);
updateTime(); // initial call to display the time immediately

