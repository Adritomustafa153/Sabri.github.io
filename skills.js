document.addEventListener("DOMContentLoaded", function () {
    // Circular Progress Bars Animation
    const circularProgressBars = document.querySelectorAll(".circular-progress");

    circularProgressBars.forEach(progressBar => {
        const progress = progressBar.getAttribute("data-progress");
        const skillPercent = progressBar.querySelector(".circle-skill-percent");
        let currentPercent = 0;

        const animateProgress = setInterval(() => {
            if (currentPercent >= progress) {
                clearInterval(animateProgress);
            } else {
                currentPercent++;
                skillPercent.textContent = `${currentPercent}%`;
                progressBar.style.setProperty("--progress", `${currentPercent * 3.6}deg`);
            }
        }, 20);
    });

    // Technical Skills Bars Animation
    const techSkillBars = document.querySelectorAll('.tech-skill-per');

    techSkillBars.forEach(skillBar => {
        const percentage = skillBar.getAttribute('data-per');
        skillBar.style.setProperty('--width', percentage);
        skillBar.style.width = percentage;
    });
});
