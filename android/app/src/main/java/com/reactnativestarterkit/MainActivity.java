package com.reactnativestarterkit;
import org.devio.rn.splashscreen.SplashScreen; // here
import android.os.Bundle;

import android.content.Intent;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
