const hoursTrigger = document.querySelector("[data-open-hours]");
const hoursModal = document.querySelector("[data-hours-modal]");
const hoursCloseButtons = document.querySelectorAll("[data-close-hours]");

if (hoursTrigger && hoursModal) {
    const openHoursModal = (event) => {
        event.preventDefault();
        hoursModal.hidden = false;
        document.body.style.overflow = "hidden";
    };

    const closeHoursModal = () => {
        hoursModal.hidden = true;
        document.body.style.overflow = "";
    };

    hoursTrigger.addEventListener("click", openHoursModal);
    hoursCloseButtons.forEach((button) => {
        button.addEventListener("click", closeHoursModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !hoursModal.hidden) {
            closeHoursModal();
        }
    });
}
