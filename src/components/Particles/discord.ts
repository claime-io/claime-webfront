import { discordIconSrc } from 'src/assets/images'
import { Container } from 'tsparticles'
import { presets } from './presets'

export const discordOptions: typeof presets = {
  autoPlay: true,
  background: {
    color: { value: '' },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: { color: { value: '#fff' }, opacity: 1 },
    enable: false,
  },
  fullScreen: { enable: false, zIndex: -1 },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: { enable: false, mode: [] },
      onHover: {
        enable: false,
        mode: [],
        parallax: { enable: false, force: 2, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bubble: { distance: 400, duration: 2, mix: false, opacity: 8, size: 40 },
      connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      grab: {
        distance: 400,
        links: { blink: false, consent: false, opacity: 1 },
      },
      light: {
        area: {
          gradient: { start: { value: '#ffffff' }, stop: { value: '#000000' } },
          radius: 1000,
        },
        shadow: { color: { value: '#000000' }, length: 2000 },
      },
      push: { default: true, groups: [], quantity: 4 },
      remove: { quantity: 2 },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
      },
      slow: { factor: 3, radius: 200 },
      trail: { delay: 1, pauseOnStop: false, quantity: 1 },
    },
  },
  manualParticles: [],
  motion: { disable: false, reduce: { factor: 4, value: true } },
  particles: {
    bounce: {
      horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
    },
    collisions: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      enable: true,
      mode: 'destroy',
      overlap: { enable: true, retries: 0 },
    },
    color: {
      value: '#ffffff',
      animation: {
        h: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
        s: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
        l: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
      },
    },
    destroy: {
      split: {
        count: 1,
        factor: { random: { enable: false, minimumValue: 0 }, value: 3 },
        rate: {
          random: { enable: false, minimumValue: 0 },
          value: { min: 4, max: 9 },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        sync: false,
      },
      duration: {
        random: { enable: false, minimumValue: 0.0001 },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: { value: '#fff' },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: { blur: 5, color: { value: '#00ff00' }, enable: false },
      triangles: { enable: false, frequency: 1 },
      width: 1,
      warp: false,
    },
    move: {
      angle: { offset: 0, value: 90 },
      attract: { distance: 200, enable: true, rotate: { x: 600, y: 1200 } },
      decay: 0,
      distance: {},
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
        enable: false,
        options: {},
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      random: true,
      size: false,
      speed: 6,
      spin: { acceleration: 0, enable: false },
      straight: false,
      trail: { enable: false, length: 10, fillColor: { value: '#000000' } },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, area: 1000, factor: 100 },
      limit: 0,
      value: 100,
    },
    opacity: {
      random: { enable: false, minimumValue: 0.1 },
      value: 0.5,
      animation: {
        count: 0,
        enable: true,
        speed: 1.5,
        sync: true,
        destroy: 'none',
        startValue: 'random',
        minimumValue: 0.1,
      },
    },
    orbit: {
      animation: { count: 0, enable: false, speed: 1, sync: false },
      enable: false,
      opacity: 1,
      rotation: { random: { enable: false, minimumValue: 0 }, value: 45 },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: { enable: false, value: 0 },
      enable: false,
      enlighten: { enable: false, value: 0 },
      mode: 'vertical',
      speed: 25,
    },
    rotate: {
      random: { enable: true, minimumValue: 0 },
      value: 0,
      animation: { enable: true, speed: 5, sync: false },
      direction: 'random',
      path: false,
    },
    shadow: {
      blur: 0,
      color: { value: '#000000' },
      enable: false,
      offset: { x: 0, y: 0 },
    },
    shape: {
      options: {
        polygon: { nb_sides: 5 },
        star: { nb_sides: 5 },
        image: {
          src: discordIconSrc,
          width: 121,
          height: 92,
        },
      },
      type: 'image',
    },
    size: {
      random: { enable: true, minimumValue: 40 },
      value: { min: 40, max: 160 },
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
        destroy: 'max',
        startValue: 'random',
        minimumValue: 40,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: '#000000',
        animation: {
          h: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
          s: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
          l: { count: 0, enable: false, offset: 0, speed: 1, sync: true },
        },
      },
    },
    tilt: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      animation: { enable: false, speed: 0, sync: false },
      direction: 'clockwise',
      enable: false,
    },
    twinkle: {
      lines: { enable: false, frequency: 0.05, opacity: 1 },
      particles: { enable: false, frequency: 0.05, opacity: 1 },
    },
    wobble: { distance: 5, enable: false, speed: 50 },
    zIndex: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  themes: [],
  zLayers: 100,
}

export const slow = (contaier: Container) => {
  contaier.options.particles.move.direction = 'none'
  contaier.options.particles.move.speed = 0.1
  contaier.options.particles.rotate.animation.speed = 1
  contaier.options.particles.opacity.animation.speed = 0.5
  contaier.refresh()
}

export const rising = (contaier: Container) => {
  contaier.options.particles.move.direction = 'top'
  contaier.options.particles.move.speed = 24
  contaier.options.particles.rotate.animation.speed = 5
  contaier.options.particles.opacity.animation.speed = 1.5
  contaier.options.particles.collisions.mode = 'bounce'
  contaier.options.particles.size.value = 120
  contaier.options.particles.size.random.enable
  contaier.options.particles.number.density.value_area = 100000
  contaier.refresh()
}

export const falling = (contaier: Container) => {
  contaier.options.particles.move.direction = 'bottom'
  contaier.options.particles.move.speed = 6
  contaier.options.particles.collisions.mode = 'destroy'
  contaier.refresh()
}
