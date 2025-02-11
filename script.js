const explanations = [
    "Searching the website",
    "DNS Records will be searched and checked to find its IP",
    "Sending HTTP request through TCP/IP protocol",
    "Checking certificate for authentication",
    "Checking Firewall",
    "Analyzing the traffic to allocate a server",
    "Processing the request and sending the response as HTML, CSS, JS",
    "No certificate found, request rejected"
];

let useHttp = false;

function explanation(index){
    document.getElementById('explanation').innerText = explanations[index];
}

function startAnimation() {
    const circles = document.querySelectorAll('.circle'); 
    circles.forEach((circle, index) => {
        circle.style.animation = `circleAnimation 3s forwards`;
        circle.style.animationDelay = `${index * 3}s`; 
        setTimeout(() => {
            if (useHttp && index === 3) {
                document.getElementById('rejected').style.display = 'block';
                explanation(7); // Show rejection explanation
            } else {
                document.getElementById('rejected').style.display = 'none';
                explanation(index);
            }
        }, index * 3000);
    });
    animateIcons();
}

function animateIcons() {
    const icons = document.querySelectorAll('.icons img');
    setTimeout(() => {
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
            }, index * 500);
        });
    }, 19000); 
}

function toggleHttp() {
    useHttp = !useHttp;
    document.getElementById('rejected').style.display = useHttp ? 'none' : 'block';
}