fetch('/api/v1/southSanFranciscoRecord').
  then(res => res.json()).
  then(res => renderPage(res)
  );

function renderPage(dataObj) {
  // Set PM2.5 value
  let particulateMatter = document.getElementById('particulate-matter-data');
  particulateMatter.textContent = dataObj.ParticulateMatter;

  // Set ozone value
  let ozoneData = document.getElementById('ozone-data');
  ozoneData.textContent = dataObj.Ozone;

  // Set area name
  let area = document.getElementById('area');
  area.textContent = dataObj.ReportingArea;

  // Set air quality status
  setStatus(dataObj.ParticulateMatter)
}

function setStatus(particulateMatter) {
  let statusData;
  let colorPalette;

  if (particulateMatter <= 12.0) {
    loadParticles('good_particles.json');
    statusData = 'good';
  } else if (particulateMatter > 12.0 && particulateMatter <= 35.4) {
    loadParticles('moderate_particles.json');
    statusData = 'moderate';
  } else if (particulateMatter > 35 && particulateMatter <= 55.4) {
    loadParticles('bad_particles.json');
    statusData = 'bad';
  } else if (particulateMatter > 55.4 && particulateMatter <= 150.4) {
    loadParticles('unhealthy_particles.json');
    statusData = 'unhealthy';
  } else if (particulateMatter > 150.4 && particulateMatter <= 250.4) {
    loadParticles('dangerous_particles.json');
    statusData = 'dangerous';
  } else if (particulateMatter > 250.5) {
    loadParticles('hazardous_particles.json');
    statusData = 'hazardous';
  };
  
  let status = document.getElementById('status');
  status.textContent = statusData;

  // Pick palette for the page
  setColorPalette(statusData);
}

function setColorPalette(statusData) {
  let circleContainer=document.getElementById('circle-container');
  circleContainer.className=`${statusData}-color`
  let area = document.getElementById('area');
  area.className=`area-${statusData}`
}

function loadParticles(JSONparticleToLoad) {
  // Loades particles(dust json file)
  particlesJS.load('particles-js', `particles/${JSONparticleToLoad}`)
};