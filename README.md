/* Text Animation */
@keyframes textSlideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes textFadeOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.content {
  width: 960px;
  min-height: 70px;
  background: black;
  opacity: 0.7;
  color: #fff;
  position: absolute;
  bottom: 11px;
  display: flex;
  justify-content: space-between;
  animation: textSlideIn 1s ease-in-out; /* Add animation on load */
}

.slide.active-slide .content {
  animation: textSlideIn 1s ease-in-out; /* Trigger slide-in animation */
}

.slide:not(.active-slide) .content {
  animation: textFadeOut 0.5s ease-in-out; /* Trigger fade-out animation */
}
