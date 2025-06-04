import 'package:fetching_json/state/counter.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';
import 'package:fetching_json/state/user_state.dart';

class SingleUserPage extends StatefulWidget {
  const SingleUserPage({super.key});

  @override
  State<StatefulWidget> createState() => _SingleUserPageState();
}

class _SingleUserPageState extends State<SingleUserPage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        JuneBuilder(
          () => Counter(),
          builder: (context) => Text('Counter ${context.count}'),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: JuneBuilder(() => UserState(), builder: (context) {
            return Table(
              border: const TableBorder.symmetric(),
              columnWidths: const <int, TableColumnWidth>{
                0: FixedColumnWidth(96),
                1: FlexColumnWidth(),
              },
              defaultVerticalAlignment: TableCellVerticalAlignment.top,
              children: <TableRow>[
                TableRow(
                    decoration: BoxDecoration(
                        color: Colors.amber,
                        borderRadius: BorderRadius.circular(10),
                        border: const Border.symmetric()),
                    children: <Widget>[
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text(
                          'Firstname',
                          textAlign: TextAlign.right,
                          style: TextStyle(fontWeight: FontWeight.normal),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          context.firstName,
                          textAlign: TextAlign.left,
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                      )
                    ]),
                TableRow(children: <Widget>[
                  const Align(
                      alignment: Alignment.centerRight,
                      child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text('Lastname'))),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      context.lastName,
                      textAlign: TextAlign.left,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                  )
                ])
              ],
            );
          }),
        ),
      ]),
    );
  }
}
