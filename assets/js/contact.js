//----------About the Developer----------//

// When readMore is clicked, add the Read Less text and remove the hidden-text class
function showMore() {
	document.getElementById('readMore').innerHTML =
		'<a href="javascript:showLess()" id="readMore">Read Less</a>';
	document.getElementById('more').classList.remove('hidden-text');
}

// When readLess is clicked, add the Read More text and add the hidden-text class
function showLess() {
	document.getElementById('readMore').innerHTML =
		'<a href="javascript:showMore()" class="not-tab" id="readMore">Read More</a>';
	document.getElementById('more').classList.add('hidden-text');
}

// Send email using js, when sent or failed to send gives a modal saying so and re-loads the page
function sendMail() {
	emailjs
		.send('iCloud-Charlie', 'template_maze', {
			message: document.getElementById('subject').value,
			from_name: document.getElementById('fullName').value,
			from_email: document.getElementById('emailAddress').value,
		})
		.then(
			function () {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Your message has been sent! Thank You for getting in touch.',
				}).then((result) => {
					if (result.isConfirmed) {
						location.reload();
					}
				});
			},
			function () {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong! Your message was not sent!',
				}).then((result) => {
					if (result.isConfirmed) {
						location.reload();
					}
				});
			}
		);
	return false;
}

// Adds the event listener to the send button
window.onload = function () {
	document.getElementById('send').addEventListener('submit', function (event) {
		event.preventDefault();
		emailjs.sendForm('template_maze', 'form', this);
	});
};
