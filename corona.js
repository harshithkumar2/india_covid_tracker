var active = document.getElementById('tablee');
var btn = document.getElementById('refresh');
window.onload =   function livee() {

    fetch("https://api.covid19india.org/data.json")
      .then(response => response.json())
      .then((data) =>{
        console.log(data);
          //data = Object.keys(data)
        data.statewise.forEach((result) => {

          var active = document.getElementById('tablee');
          var row = active.insertRow()
          var cel1 = row.insertCell()
          var cel2 = row.insertCell()
          var cel3 = row.insertCell()
          var cel4 = row.insertCell()
          var cel5 = row.insertCell()
          var cel6 = row.insertCell()
          var cel7 = row.insertCell()
          var cel8 = row.insertCell()
          var cel9 = row.insertCell()
          var cel10 = row.insertCell()
          var cel11 = row.insertCell()
          cel1.innerHTML = result.state
          cel2.innerHTML = result.confirmed  + "       " +     "(" + "⇧" +    +result.deltaconfirmed + ")"
          cel3.innerHTML = result.active
          cel4.innerHTML = result.deaths + "       " +     "(" + "⇧" +    +result.deltadeaths + ")"
          cel5.innerHTML = result.recovered  + "       " +     "(" + "⇧" +    +result.deltarecovered + ")"
          cel6.innerHTML = result.deltaconfirmed
          cel7.innerHTML = result.deltadeaths
          cel8.innerHTML = result.deltarecovered
          cel9.innerHTML = result.migratedother
          cel10.innerHTML = result.statecode
          cel11.innerHTML = result.lastupdatedtime
        });

      });

  }

  btn.addEventListener('click', () =>{
    location.reload();
  })
