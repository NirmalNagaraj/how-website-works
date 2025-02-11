const explanations = [
    "Searching the website",
    "DNS Records will be searched and checked to find its IP",
    "Sending HTTP request through TCP/IP protocol",
    "Checking certificate for authentication",
    "Checking Firewall",
    "Analyzing the traffic to allocate a server",
    "Processing the request and sending the response as HTML, CSS, JS",
    "No certificate found, request rejected",
  ]
  
  let useHttp = false
  
  function explanation(index) {
    document.getElementById("explanation").innerText = explanations[index]
  }
  
  function startAnimation() {
    const circles = document.querySelectorAll(".circle")
    let shouldStop = false
  
    // Reset animations
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.style.animation = "none"
      circle.classList.remove("rejected")
    })
    document.getElementById("rejected").style.display = "none"
    document.getElementById("explanation").innerText = ""
  
    circles.forEach((circle, index) => {
      circle.style.animation = `circleAnimation 3s forwards`
      circle.style.animationDelay = `${index * 3}s`
  
      setTimeout(() => {
        if (useHttp && index === 3) {
          shouldStop = true
          circle.classList.add("rejected")
          document.getElementById("rejected").style.display = "block"
          explanation(7) // Show rejection explanation
          return
        }
  
        if (!shouldStop) {
          document.getElementById("rejected").style.display = "none"
          explanation(index)
  
          // If this is the last circle and we're not stopped
          if (index === circles.length - 1) {
            setTimeout(() => {
              explanation(6) // Show the final processing message
              animateIcons()
            }, 3000)
          }
        }
      }, index * 3000)
  
      // Stop subsequent animations if rejected
      if (useHttp && index > 3) {
        circle.style.animation = "none"
      }
    })
  }
  
  function animateIcons() {
    const icons = document.querySelectorAll(".icons img")
    icons.forEach((icon, index) => {
      icon.style.animation = "none"
      icon.style.opacity = "0"
      setTimeout(() => {
        icon.style.animation = `iconAnimation 2s forwards`
        icon.style.animationDelay = `${index * 0.5}s`
      }, 100)
    })
  }
  
  function toggleHttp() {
    useHttp = !useHttp
    document.getElementById("rejected").style.display = "none"
    document.getElementById("explanation").innerText = ""
    // Reset all circles
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.style.animation = "none"
      circle.classList.remove("rejected")
    })
    // Reset icons
    document.querySelectorAll(".icons img").forEach((icon) => {
      icon.style.animation = "none"
      icon.style.opacity = "0"
    })
  }
  
  