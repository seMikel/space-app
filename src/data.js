import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';
import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';
import moon from './images/moon.png';

export const planets = [{
  id: 'mercury',
  name: 'Mercury',
  text: 'Learn a lot more about the Swift Planet itself...',
  description: 'Although Mercury is very small, it is extremely dense. An interesting fact is that each cubic centimeter of this planet has a density of 5.4 grams, and only the Earth has a higher density.',
  temp: '-173 to +427',
  atm: 'None',
  period: '88 Days',
  satellites: '0',
  image: mercury,
}, {
  id: 'venus',
  name: 'Venus',
  text: 'Learn more about the Morning Star itself...',
  description: 'The Venusian atmosphere is 92 times denser than Earth\'s, and the pressure at the surface is comparable to the pressure at a depth of one kilometer on Earth. As a result, the atmosphere near the surface of Venus is so dense that it is more of a flowing liquid than something gaseous.',
  temp: '-173 to +462',
  atm: 'None',
  period: '243 Days',
  satellites: '0',
  image: venus,
}, {
  id: 'earth',
  name: 'Earth',
  text: 'Learn more about the planet you live on...',
  description: 'At an altitude of 19 km from the surface of the Earth, the so-called “Armstrong line” passes - above it a person cannot survive without a high-altitude-compensating suit, because all the fluids in the body will boil at body temperature.',
  temp: '-91,2 to +56,7',
  atm: 'Present',
  period: '365 Days',
  satellites: '1',
  image: earth,
}, {
  id: 'mars',
  name: 'Mars',
  text: 'Learn more about the Red Planet...',
  description: 'The Red Planet is tilted at an angle of 25.2°, while the Earth is tilted at an angle of 23.5°. There are four seasons on Mars: spring, summer, autumn and winter. However, each season on Mars lasts about twice as long as it does on Earth. This is due to the fact that Mars takes almost two Earth years to complete one revolution around the Sun.',
  temp: '-50 to +20',
  atm: 'Present',
  period: '687 Days',
  satellites: '2',
  image: mars,
}, {
  id: 'jupiter',
  name: 'Jupiter',
  text: 'Learn more about the Gas Giant...',
  description: 'The powerful gravity of the gas giant attracts a huge number of comets and asteroids rushing from the Outer Solar System to its inner part. That is why Jupiter is often called the "shield of the Earth" - it really protects us.',
  temp: '-107 to +153',
  atm: 'None',
  period: '11859 Days',
  satellites: '79',
  image: jupiter,
}, {
  id: 'saturn',
  name: 'Saturn',
  text: 'Learn more about the Ringed Planet...',
  description: 'Saturn does not have a solid surface: if you tried to walk on the surface of the planet, you would fall through its outer part, subject to high temperatures and pressure. The surface of the planet is mostly gas vortices.',
  temp: '-178 to +11700',
  atm: 'None',
  period: '10759 Days',
  satellites: '82',
  image: saturn,
}, {
  id: 'uranus',
  name: 'Uranus',
  text: 'Learn more about the Bulls-Eye Planet...',
  description: 'The star magnitude of the planet is 5.Z, so it can be found without a telescope if you know where to look and have a perfectly dark sky. Because of this, the planet was often perceived as a star and even recorded as Z4 Taurus.',
  temp: '-224 to -212',
  atm: 'None',
  period: '84 Days',
  satellites: '72',
  image: uranus,
}, {
  id: 'neptune',
  name: 'Neptune',
  text: 'Learn more about the Big Blue Planet...',
  description: 'It is in the atmosphere of Neptune that the most powerful winds in the solar system blow. Their speed can reach 600 m/s, or about 2200 km/h. For comparison, the most powerful hurricane ever recorded on Earth had a speed of about 400 km/h.',
  temp: '-220 to +7100',
  atm: 'None',
  period: '165 Days',
  satellites: '14',
  image: neptune,
}, {
  id: 'moon',
  name: 'Moon',
  text: 'Learn more about the Earth\'s only natural satellite...',
  description: 'American scientist Eugene Shoemaker is the only person currently buried on the moon.',
  temp: '-173 to +127',
  atm: 'None',
  period: '5 Days',
  satellites: '0',
  image: moon,
}];