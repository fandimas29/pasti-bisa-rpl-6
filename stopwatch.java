// ini kode lengkap kalo bikin app Stopwatch

import java.awt.Color;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class MyStopwatch {

    private JFrame myFrame;
    private JPanel myPanel;

    private JButton tombolStart, tombolStop, tombolExit;
    private JLabel labelStart, labelStop, labelElapsedTime;
    private JTextField textStart, textStop, textElapsedTime;

    // mendeklarasikan variabel waktu
    long waktuMulai;
    long waktuBerhenti;
    double elapsedTime;

    private GridBagConstraints gbc;

    private int atas = 5;
    private int kiri = 20;
    private int kanan = 1;
    private int bawah = 10;

    //Konstruktor
    public MyStopwatch(){

        myFrame = new JFrame("MyStopwatch");//Membuat frame

        myPanel = new JPanel();//Membuat panel
        myPanel.setLayout(new GridBagLayout());//menggunakan grid bag layout
        myPanel.setBackground(Color.red);

        gbc = new GridBagConstraints();
        gbc.insets = new Insets(atas, kiri, kanan, bawah);//mengatur jarak tiap komponen

       //Mengatur label
       labelStart = new JLabel("Start");
       gbc.gridx = 0;
       gbc.gridy = 0;
       myPanel.add(labelStart, gbc);

       labelStop = new JLabel("Stop");
       gbc.gridx = 0;
       gbc.gridy = 1;
       myPanel.add(labelStop, gbc);

       labelElapsedTime = new JLabel("Elapsed Time (detik)");
       gbc.gridx = 0;
       gbc.gridy = 2;
       myPanel.add(labelElapsedTime, gbc);

       //mengatur text field
       textStart = new JTextField();
       textStart.setColumns(10);
       gbc.gridx = 1;
       gbc.gridy = 0;
       myPanel.add(textStart, gbc);

       textStop = new JTextField();
       textStop.setColumns(10);
       gbc.gridx = 1;
       gbc.gridy = 1;
       myPanel.add(textStop, gbc);

       textElapsedTime = new JTextField();
       textElapsedTime.setColumns(10);
       gbc.gridx = 1;
       gbc.gridy = 2;
       myPanel.add(textElapsedTime, gbc);

       //Mengatur tombol
       tombolStart = new JButton("Start Timing");
       gbc.gridx = 0;
       gbc.gridy = 3;
       myPanel.add(tombolStart, gbc);

       tombolStop = new JButton("Stop Timing");
       tombolStop.setEnabled(false);
       gbc.gridx = 0;
       gbc.gridy = 4;
       myPanel.add(tombolStop, gbc);


       tombolExit = new JButton("Exit Apps");
       gbc.gridx = 0;
       gbc.gridy = 5;
       myPanel.add(tombolExit, gbc);

        myFrame.getContentPane().add(myPanel);//Menambahkan panel ke frame
        myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        myFrame.setLocationRelativeTo(null);
        myFrame.setResizable(false);
        myFrame.pack();
        myFrame.setVisible(true);

//ini buat method atau bisa dibilang fungsinya mulai dari sini
        tombolStart.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                methodTombolStart(e);
            }
        });

        tombolStop.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                methodTombolStop(e);
            }
        });

        tombolExit.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                methodTombolExit(e);
            }
        });
    }

// ini fungsi stopwatchnya
    private void methodTombolStart(ActionEvent e){
            // click of start timing button
            waktuMulai = System.currentTimeMillis();
            textStart.setText(String.valueOf(waktuMulai));
            textStop.setText("");
            textElapsedTime.setText("");
            tombolStart.setEnabled(false);
            tombolStop.setEnabled(true);
    }

    private void methodTombolStop(ActionEvent e){
        // click of stop timing button
        waktuBerhenti = System.currentTimeMillis();
        textStop.setText(String.valueOf(waktuBerhenti));
        elapsedTime = (waktuBerhenti - waktuMulai) / 1000.0;
        textElapsedTime.setText(String.valueOf(elapsedTime));
        tombolStart.setEnabled(false);
        tombolStop.setEnabled(false);
    }

    private void methodTombolExit(ActionEvent e){
       System.exit(0);
    }

    //main method
    public static void main(String[] args) {
        new MyStopwatch();
    }
}
