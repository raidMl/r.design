async function sendMessageFunc(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Collect form data
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create payload
    const payload = {
      email: email,
      message: message,
    };
  
    // Send data to API
    try {
      const response = await fetch('http://localhost:3000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }
  


// for post orders

  async function sendOrder(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Collect form data
    const name = document.getElementById('fname').value;
    const email = document.getElementById('mail').value;
    const phone=document.getElementById('tel').value;
    const address=document.getElementById('address').value;
    const projectName=document.getElementById('projectName').value;
    const description=document.getElementById('description').value;

  
    // Create payload
    const payload = {
     name,phone,email,address,projectName,description
    };
  
    // Send data to API
    try {
      const response = await fetch('http://localhost:3000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('order sent successfully!');
      } else {
        alert('Failed to send order. Please try again.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  }
  

  //convert to js 

