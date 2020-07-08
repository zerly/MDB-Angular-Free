<?php
	// load up global things
	include_once 'autoloader.php';


	if ( isset( $_GET['code'] ) && isset( $_GET['state'] ) && $_GET['state'] == $_SESSION['twitch_state'] ) { // user is coming from twitch
		// instantiate new twitch class
		$eciTwitchApi = new eciTwitchApi( "xn3g12yzv87p0ohpnfsi6o1rh638dm", "j7pnk23rmd6o630xkhh6ompbkig5n6" );

		// try and log the user in with twitch
		$twitchLogin = $eciTwitchApi->tryAndLoginWithTwitch( $_GET['code'], "http://expedigame.com/twitch_connect.php" );
	}

	// get twitch login url
	$eciTwitchApi = new eciTwitchApi( "xn3g12yzv87p0ohpnfsi6o1rh638dm", "j7pnk23rmd6o630xkhh6ompbkig5n6" );
	$twitchLoginUrl = $eciTwitchApi->getLoginUrl( "http://expedigame.com/twitch_connect.php" );
	var_dump($twitchLoginUrl);

	// only if you are logged out can you view the login page
	loggedInRedirect();
?>
<!DOCTYPE html>
<html>
	<head>
		<!-- title of our page -->
		<title>Easy, Code Is | Login</title>

		<!-- include fonts -->
		<link href="https://fonts.googleapis.com/css?family=Coda" rel="stylesheet">

		<!-- need this so everything looks good on mobile devices -->
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

		<!-- css styles for our login page-->
		<link href="css/global.css" rel="stylesheet" type="text/css">
		<link href="css/login.css" rel="stylesheet" type="text/css">

		<!-- jquery -->
		<script type="text/javascript" src="js/jquery.js"></script>

		<!-- include our loader overlay script -->
		<script type="text/javascript" src="js/loader.js"></script>

		<script>
			$( function() { // once the document is ready, do things
				// initialize our loader overlay
				loader.initialize();

				$( '#login_button' ).on( 'click', function() { // onclick for our login button
					processLogin();
				} );

				$( '.form-input' ).keyup( function( e ) {
					if ( e.keyCode == 13 ) { // our enter key
						processLogin();
					}
				} );
			} );

			function processLogin() {
				// clear error message and red borders on signup click
				$( '#error_message' ).html( '' );
				$( '#error_message_twitch_php' ).html( '' );
				$( 'input' ).removeClass( 'invalid-input' );

				// assume no fields are blank
				var allFieldsFilledIn = true;

				$( 'input' ).each( function() { // simple front end check, loop over inputs
					if ( '' == $( this ).val() ) { // input is blank, add red border and set flag to false
						$( this ).addClass( 'invalid-input ');
						allFieldsFilledIn = false;
					}
				} );

				if ( allFieldsFilledIn ) { // all fields are filled in!
					loader.showLoader();

					// server side login
					$.ajax( {
						url: 'php/process_login.php',
						data: $( '#login_form' ).serialize(),
						type: 'post',
						dataType: 'json',
						success: function( data ) {
							if ( 'ok' == data.status ) {
								loader.hideLoader();
								window.location.href = "login.php";
							} else if ( 'fail' == data.status ) {
								$( '#error_message' ).html( data.message );
								loader.hideLoader();
							}
						}
					} );
				} else { // some fields are not filled in, show error message and scroll to top of page
					$( '#error_message' ).html( 'All fields must be filled in.' );
					$( window ).scrollTop( 0 );
				}
			}
		</script>
	</head>
	<body>
		<div class="site-header">
			<div class="site-header-pad">
				<a class="header-home-link" href="index.php">
					Easy, Code Is
				</a>
			</div>
		</div>
		<div class="site-content-container">
			<div class="site-content-centered">
				<div class="site-content-section">
					<div class="site-content-section-inner">
						<div class="section-heading">Login</div>
						<form id="login_form" name="login_form">
							<div id="error_message" class="error-message">

								<?php if ( isset( $_SESSION['eci_login_required_to_connect_twitch'] ) && $_SESSION['eci_login_required_to_connect_twitch'] ) : // enter password to connect account ?>
									<div style="margin-bottom:10px;">
										An account already exists with that email address. To connect your Twitch account, enter your password.
									</div>
								<?php endif; ?>
							</div>
							<div>
								<div class="section-label">Email</div>
								<div>
									<?php if ( isset( $_SESSION['fb_user_info']['email'] ) ? $_SESSION['fb_user_info']['email'] : '' ) : // pre populate with facebook email ?>
										<?php $inputEmail = $_SESSION['fb_user_info']['email']; ?>
									<?php elseif ( isset( $_SESSION['tw_user_info']['email'] ) ? $_SESSION['tw_user_info']['email'] : '' ) : // pre populate with twitter email ?>
										<?php $inputEmail = $_SESSION['tw_user_info']['email']; ?>
									<?php elseif ( isset( $_SESSION['twitch_user_info']['email'] ) && $_SESSION['twitch_user_info']['email'] ) : ?>
										<?php $inputEmail = $_SESSION['twitch_user_info']['email']; ?>
									<?php else : ?>
										<?php $inputEmail = ''; ?>
									<?php endif; ?>
									<input class="form-input" type="text" name="email" value="<?php echo $inputEmail; ?>" />
								</div>
							</div>
							<div class="section-mid-container">
								<div class="section-label">Password</div>
								<div><input class="form-input" type="password" name="password" /></div>
							</div>
						</form>
						<div class="section-action-container">
							<div class="section-button-container" id="login_button">
								<div>Login</div>
							</div>
						</div>
						<div class="section-action-container">
							- OR -
							<?php echo $_SESSION['user_info']['first_name'];
							echo $_SESSION['twitch_user_info']['first_name']; ?>
						</div>
						
						
						<div class="section-action-container">
							<div id="error_message_twitch_php" class="error-message">
								<?php if ( isset( $twitchLogin['status'] ) && 'fail' == $twitchLogin['status'] ) : ?>
									<div>
										<?php echo $twitchLogin['message'];
									 echo $_SESSION['twitch_user_info']['first_name']; 
										 ?>	

									</div>
								<?php endif; ?>
							</div>
						</div>
						<div class="section-action-container">
							<a href="<?php echo $twitchLoginUrl; ?>" class="a-twitch">
								<div class="twitch-button-container">
									Login with Twitch (PHP)
								</div>
							</a>
						</div>
						<div class="section-footer-container">
							Not a member? <a class="a-default" href="signup.php">Sign Up</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>