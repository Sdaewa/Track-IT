const URL = 'https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getAllJobs() {
  const response = await fetch(`${URL}/jobs.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Jobs Applications.');
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

  return jobs
  
;
}

export async function getSingleJob(jobId) {
  const response = await fetch(`${URL}/jobs/${jobId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Job Application.');
  }

  const loadedJob = {
    id: jobId,
    ...data,
  };

  return loadedJob;
}

export async function addJob(jobData) {
  const response = await fetch(`${URL}/jobs.json`, {
    method: 'POST',
    body: JSON.stringify(jobData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add new job.');
  }

  return null;
}

export async function deleteJob(jobId) {
  const response = await fetch(`${URL}/jobs/${jobId}.json`, {
    method: 'DELETE'
  });
  const data = await response.json();
 
  if (!response.ok) {
    throw new Error(data.message);
  }
 
  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${URL}/comments/${requestData.jobId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(jobId) {
  const response = await fetch(`${URL}/comments/${jobId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
