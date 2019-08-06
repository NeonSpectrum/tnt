var moment = require('moment')

module.exports = function() {
  return {
    verify: function(arg0, arg1) {
      if (arg0 === 'CAS - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Arts and Sciences',
          campus: 'Manila',
          abbr: arg0,
          image: 'cas_thumb.png'
        }
      } else if (arg0 === 'CBA - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Business Administration',
          campus: 'Manila',
          abbr: arg0,
          image: 'ba_thumb.png'
        }
      } else if (arg0 === 'CCSS - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Computer Studies and Systems',
          campus: 'Manila',
          abbr: arg0,
          image: 'ccss_thumb.png'
        }
      } else if (arg0 === 'CDent - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Dentistry',
          campus: 'Manila',
          abbr: arg0,
          image: 'dent_thumb.png'
        }
      } else if (arg0 === 'CEduc - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Education',
          campus: 'Manila',
          abbr: arg0,
          image: 'educ_thumb.png'
        }
      } else if (arg0 === 'CEng - Manila' && arg1 === 'manila' + moment().format('YYYY')) {
        return {
          college: 'College of Engineering',
          campus: 'Manila',
          abbr: arg0,
          image: 'engineering_thumb.png'
        }
      } else if (arg0 === 'CAS - Caloocan' && arg1 === 'caloocan' + moment().format('YYYY')) {
        return {
          college: 'College of Arts and Sciences',
          campus: 'Caloocan',
          abbr: arg0,
          image: 'cas_thumb.png'
        }
      } else if (arg0 === 'CBA - Caloocan' && arg1 === 'caloocan' + moment().format('YYYY')) {
        return {
          college: 'College of Business Administration',
          campus: 'Caloocan',
          abbr: arg0,
          image: 'ba_thumb.png'
        }
      } else if (arg0 === 'CEng - Caloocan' && arg1 === 'caloocan' + moment().format('YYYY')) {
        return {
          college: 'College of Engineering',
          campus: 'Caloocan',
          abbr: arg0,
          image: 'engineering_thumb.png'
        }
      } else if (arg0 === 'CFAD - Caloocan' && arg1 === 'caloocan' + moment().format('YYYY')) {
        return {
          college: 'College of Fine Arts, Architecture and Design',
          campus: 'Caloocan',
          abbr: arg0,
          image: 'fa_thumb.png'
        }
      } else {
        return false
      }
    }
  }
}
