class STEProgarm {
    // Practical No 7
    // STE Programs
    // 1st program
    public static int for_Loop() {
        int i;
        for (i = 0; i <= 10; i++) {
            System.out.print(i);
            System.out.print(" ");
        }
        return 0;
    }

    // 2nd Program
    public static int if_Statement() {

        // To Print Even Odd
        int num = 72;
        if (num % 2 == 0) {
            System.out.println(num + " Is An Even Number");
        } else {
            System.out.println(num + " Is Odd Number");
        }

        return 0;
    }

    public static int do_While_Loop() {
        int i = 10;
        do {

            System.out.print(i);
            System.out.print(" ");
            i--;
        } while (i > 0);

        return 0;
    }

    public static int Switch_Statement() {

        char v = 'n';

        switch (v) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                System.out.println("It's Vowel");
                break;
            default:
                System.out.println("It's not a Vowel");

        }

        return 0;
    }

    public static void main(String[] args) {
        System.out.println("for Loop Function");
        for_Loop();
        System.out.println(" ");
        System.out.println("If Statement Function");
        if_Statement();
        System.out.println("Do While Function");
        do_While_Loop();
        System.out.println(" ");
        System.out.println("Switch Statment");
        Switch_Statement();
    }
}