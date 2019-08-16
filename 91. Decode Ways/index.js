public int numDecodings(String s) {

    int[] previousAnswers = new int[s.length()];
    Arrays.fill(previousAnswers, -1);

    return numDecodings(s, 0, previousAnswers);
}

public int numDecodings(String s, int decodePointer, int[] previousAnswers) {

    if (decodePointer >= s.length()) {
        return 1;
    }

    if (previousAnswers[decodePointer] > -1) {
        return previousAnswers[decodePointer];
    }

    int totalWaysFromHere = 0;

    if (decodePointer + 1 <= s.length()) {
        String firstWay = s.substring(decodePointer, decodePointer + 1); // single character decoding
        if (isValid(firstWay)) {
            totalWaysFromHere += numDecodings(s, decodePointer + 1, previousAnswers);
        }
    }

    if (decodePointer + 2 <= s.length()) {
        String secondWay = s.substring(decodePointer, decodePointer + 2); // 2 character decoding
        if (isValid(secondWay)) {
        
            totalWaysFromHere += numDecodings(s, decodePointer + 2, previousAnswers);
        }
    }

    previousAnswers[decodePointer] = totalWaysFromHere;

    return previousAnswers[decodePointer]; // The answer to this subproblem
}


public boolean isValid(String s){

    if (s.length() == 0) {
        return false;
    }

    if (s.charAt(0) == '0') {
        return false;
    }

    int value = Integer.parseInt(s);

    return value >= 1 && value <= 26;
}