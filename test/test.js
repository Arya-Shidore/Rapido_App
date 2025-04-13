import autocannon from 'autocannon';

const loadTest = autocannon({
  url: 'http://localhost:5000',
  connections: 50,     // concurrent connections
  duration: 10,        // duration in seconds
  amount: 1000,        // total number of requests to make
  requests: [
    {
      method: 'GET',
      path: '/api/ride/get-distanceTime'
    }
  ]
}, (err, results) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log({
    url: results.url,
    totalRequests: results.requests.total,
    timeInSeconds: results.duration
  });
});

// Track progress
autocannon.track(loadTest);