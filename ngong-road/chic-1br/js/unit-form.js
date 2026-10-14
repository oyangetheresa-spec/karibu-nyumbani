/* =====================================================================
   unit-form.js
   Turns the dates form into a WhatsApp message with everything filled in.
   It reads the form fields by their ids: ci, co, gu, un.
   ===================================================================== */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '254757942317';   // change here if the number ever changes

  var form = document.getElementById('avail');
  if (!form) return;                      // do nothing on pages without the form

  var checkIn  = document.getElementById('ci');
  var checkOut = document.getElementById('co');
  var guests   = document.getElementById('gu');
  var unit     = document.getElementById('un');

  // "Today" in the visitor's own time zone (so Nairobi guests don't get yesterday's date)
  function todayLocal() {
    var now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString().split('T')[0];
  }

  // Turn "2026-10-20" into "20 Oct 2026"
  function pretty(isoDate) {
    return new Date(isoDate + 'T00:00:00').toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  // You can't pick a check-in in the past, and check-out must be after check-in
  checkIn.min = todayLocal();
  checkIn.addEventListener('change', function () {
    checkOut.min = checkIn.value;
    checkOut.setCustomValidity('');
    if (checkOut.value && checkOut.value <= checkIn.value) checkOut.value = '';
  });
  checkOut.addEventListener('change', function () { checkOut.setCustomValidity(''); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!checkIn.value) { checkIn.setCustomValidity('Please choose a check-in date'); checkIn.reportValidity(); checkIn.setCustomValidity(''); return; }
    if (!checkOut.value) { checkOut.setCustomValidity('Please choose a check-out date'); checkOut.reportValidity(); return; }
    if (checkOut.value <= checkIn.value) {
      checkOut.setCustomValidity('Check-out must be after check-in');
      checkOut.reportValidity();
      return;
    }

    var nights = Math.round(
      (new Date(checkOut.value) - new Date(checkIn.value)) / 86400000
    );

    var message =
      "Hi TJ, I'd like to check availability at Racecourse Gardens (off Ngong Road).\n" +
      'Unit: ' + unit.value + '\n' +
      'Check-in: ' + pretty(checkIn.value) + '\n' +
      'Check-out: ' + pretty(checkOut.value) + ' (' + nights + (nights === 1 ? ' night' : ' nights') + ')\n' +
      'Guests: ' + guests.value;

    // TODO later: record this click (for example a Google Analytics event) so you can count how many visitors start a booking.

    window.open(
      'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message),
      '_blank',
      'noopener'
    );
  });
})();
