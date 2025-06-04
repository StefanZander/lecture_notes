import 'package:june/june.dart';

class Counter extends JuneState {
  int count = 0;

  void incCounter() {
    count = count + 1;
    setState();
  }

  void decCounter() {
    count = count - 1;
    setState();
  }

  void resetCounter() {
    count = 0;
    setState();
  }
}
