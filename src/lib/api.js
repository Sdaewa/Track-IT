const URL = "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

export const getJobs = async () =>{
  const response = await fetch(URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Jobs.');
  }

  const jobs = [];

 for (const key in data) {
        jobs.push({
          id: key,
          company: data[key].company,
          role: data[key].role,
          techStack: data[key].techStack,
          appliedDate: data[key].appliedDate,
        });
      }

  return jobs;
}

export const addJob = async (jobData) =>{
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(jobData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add Job');
  }

  return null;
}