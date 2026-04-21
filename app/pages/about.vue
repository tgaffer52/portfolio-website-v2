<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 background-gradient" />

    <!-- Content -->
    <div class="relative p-10 z-10">
      <div class="flex gap-x-10">
        <!-- pic here -->
        <div class="fade-in-element fade-in-1">
          <img
            src="@/assets/images/me.webp"
            alt="me"
            class="max-h-screen rounded border border-purple-500 border-2"
          />
        </div>
        <div>
          <div class="fade-in-element fade-in-2">
            <h1>About Me</h1>
            <p>
              Hello! My name is Trevor Gaffney. I am a bilingual professional
              software engineer with over two years of experience in both
              front-end and back-end web development as well as web design,
              database creation and management, and cloud architecture.
            </p>
            <p>
              I currently reside in Yokohama, Japan with my wife and my two
              cats: Chai and Oolong. I am an employee of Ferix Inc., a Japanese
              software development company.
            </p>
          </div>
          <div class="timeline fade-in-element fade-in-3">
            <h2>Timeline</h2>
            <div class="timeline-item">
              <div class="timeline-marker">
                <Icon name="mdi:airplane" class="timeline-icon" />
              </div>
              <div class="timeline-content">
                <div class="timeline-date">March 2017</div>
                <h3 class="timeline-title">Move to Japan</h3>
                <p class="timeline-description">
                  Worked as an English teacher in Japan while exploring and
                  adjusting to a new life.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker">
                <Icon name="mdi:school" class="timeline-icon" />
              </div>
              <div class="timeline-content">
                <div class="timeline-date">March ~ August 2023</div>
                <h3 class="timeline-title">Le Wagon Bootcamp</h3>
                <p class="timeline-description">
                  Completed an intensive and comprehensive full-stack web
                  development program, learning HTML, CSS, JavaScript, Ruby, and
                  Ruby on Rails, as well as project management, version control,
                  and agile methodologies.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker">
                <Icon name="mdi:briefcase" class="timeline-icon" />
              </div>
              <div class="timeline-content">
                <div class="timeline-date">September 2023 ~ May 2024</div>
                <h3 class="timeline-title">Freelance Developer</h3>
                <p class="timeline-description">
                  Created a website for the author Darius Ebrahimi while
                  expanding my skillset.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker">
                <Icon name="mdi:briefcase" class="timeline-icon" />
              </div>
              <div class="timeline-content">
                <div class="timeline-date">June 2024</div>
                <h3 class="timeline-title">Joined Ferix Inc.</h3>
                <p class="timeline-description">
                  Started as a professional full-stack software engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  @apply text-4xl font-bold mb-4;
}
h2 {
  @apply text-2xl font-semibold mt-8 mb-6;
}

p {
  @apply mb-4;
}

.timeline {
  @apply relative;
}

.timeline::before {
  content: "";
  @apply absolute left-8 top-10 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-900;
  background: linear-gradient(
    180deg,
    rgba(168, 85, 247, 0.8) 0%,
    rgba(88, 28, 135, 0.8) 100%
  );
}

.timeline-item {
  @apply relative mb-8 pl-28 flex items-start;
  animation: slideIn 0.6s ease-out forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }

  &:has(.timeline-content:hover) .timeline-marker {
    transform: translateX(40px);
  }
}

.timeline-marker {
  @apply absolute left-0 w-16 h-16 bg-black border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300;
  transform: translateX(-19px);

  .timeline-icon {
    @apply w-8 h-8 text-purple-400;
  }
}

.timeline-content {
  @apply w-full lg:w-[400px] bg-zinc-900/50 border border-purple-500/30 rounded-lg p-4 hover:bg-zinc-900/80 transition-all duration-300;
  backdrop-filter: blur(10px);

  &:hover {
    @apply border-purple-500/60 shadow-lg;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  }
}

.timeline-date {
  @apply text-sm font-semibold text-purple-400 mb-1;
}

.timeline-title {
  @apply text-lg font-bold text-white mb-2 !mt-0;
}

.timeline-description {
  @apply text-gray-300 text-sm;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.background-gradient {
  background: radial-gradient(
    circle at 40% 60%,
    rgba(56, 16, 58, 0.6) 0%,
    rgba(41, 41, 41, 0.5) 50%,
    rgba(21, 21, 21, 0.95) 100%
  );
  background-size: 200% 200%;
  /* animation: oceanFlow 15s ease-in-out infinite; */
}
</style>
