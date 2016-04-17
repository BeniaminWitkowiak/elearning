# elearning-

1. Otwierajcie w firefoxie jeśli chcecie mieć widoczne menu ;)
	Jeśli chcecie testować lokalnie na chromie to macie dwie opcje:
		Odpalać stronki przy użyciu servera: najprościej zainstalwować sobie 'brackets' albo 'web matrix', które pozwolą wam edytować i testować
	
		Druga opcja wymaga odpalenia chroma tak żeby pozwalał nam załączać lokalne pliki, instrukcję jak to zrobić znajdziecie tutaj: http://www.chrome-allow-file-access-from-file.com/windows.html


2. Multiple chhoice task
	W znaczniku `form` ustawiasz propowane odpowiedzi, dodając każdej znacznik ng-model="wrong-nr"/"right-nr" - każdy kolejny musi mieć unikalną wartość.
	
	Następny krok to ustawienie zmiennych w skrypcie na końcu strony:
		Przy zmiennej allRightCheck podajecie nazwy znaczników swoich poprawnych połączone spójnikiem logicznym `and` (&&), podobnie dla someRightCheck tutaj używając `||`
		var allRightCheck = $scope.right1 && $scope.right2  && $scope.right3;
		var someRightCheck = $scope.right1 || $scope.right2  || $scope.right3;
		
		Przy someWrongCheck podalecie nazwy wszystkich znaczników przy odpowiedziach błędnych.
		var someWrongCheck = $scope.wrong1 || $scope.wrong2;