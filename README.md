# elearning-

1. Otwierajcie w firefoxie jeśli chcecie mieć widoczne menu ;)

2. Multiple chhoice task
	W znaczniku `form` ustawiasz propowane odpowiedzi, dodając każdej znacznik ng-model="wrong-nr"/"right-nr" - każdy kolejny musi mieć unikalną wartość.
	
	Następny krok to ustawienie zmiennych w skrypcie na końcu strony:
		Przy zmiennej allRightCheck podajecie nazwy znaczników swoich poprawnych połączone spójnikiem logicznym `and` (&&), podobnie dla someRightCheck tutaj używając `||`
		var allRightCheck = $scope.right1 && $scope.right2  && $scope.right3;
		var someRightCheck = $scope.right1 || $scope.right2  || $scope.right3;
		
		Przy someWrongCheck podalecie nazwy wszystkich znaczników przy odpowiedziach błędnych.
		var someWrongCheck = $scope.wrong1 || $scope.wrong2;