import 'package:fetching_json/main.dart';
import 'package:fetching_json/state/counter.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
                'Tab the buttons or swipe to left/right in order to increase or decrease the counter.'),
          ),
          const Spacer(
            flex: 1,
          ),
          ElevatedButton(
            onPressed: () {
              showSnackBar(context,
                  text: "Increasing Counter by 1", duration: 300);
              var state = June.getState(() => Counter());
              state.incCounter();
            },
            child: const Padding(
              padding: EdgeInsets.all(8.0),
              child: Icon(
                Icons.arrow_upward,
                size: 32,
              ),
            ),
          ),
          Expanded(
              flex: 2,
              child: Center(
                child: Row(
                  textBaseline: TextBaseline.alphabetic,
                  crossAxisAlignment: CrossAxisAlignment.baseline,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text('Counter '),
                    JuneBuilder(
                      () => Counter(),
                      builder: (context) => Text(
                        '${context.count}',
                        style: const TextStyle(
                          fontSize: 96,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ),
                  ],
                ),
              )),
          ElevatedButton(
              onPressed: () {
                showSnackBar(context,
                    text: "Decresing Counter by 1", duration: 300);
                var state = June.getState(() => Counter());
                state.decCounter();
              },
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Icon(
                  Icons.arrow_downward,
                  size: 32,
                ),
              )),
          const Spacer(
            flex: 1,
          )
        ],
      ),
    );
  }
}
