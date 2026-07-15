@echo off
echo ================================================
echo  AUREA - Copying placeholder images
echo ================================================

set SOURCE=C:\Users\lenov\.gemini\antigravity-ide\brain\098cc96a-2580-46b2-8348-1e370263bc1b

:: Hero background
echo Copying hero background...
copy "%SOURCE%\hero_background_1784082206491.png" "public\images\hero-bg.webp" >nul 2>&1

:: Gallery images
echo Copying gallery images...
copy "%SOURCE%\gallery_1_1784082226866.png" "public\images\gallery\gallery-1.webp" >nul 2>&1
copy "%SOURCE%\gallery_2_1784082237164.png" "public\images\gallery\gallery-2.webp" >nul 2>&1
copy "%SOURCE%\gallery_3_1784082250729.png" "public\images\gallery\gallery-3.webp" >nul 2>&1
copy "%SOURCE%\gallery_4_1784082273790.png" "public\images\gallery\gallery-4.webp" >nul 2>&1
copy "%SOURCE%\gallery_5_1784082286787.png" "public\images\gallery\gallery-5.webp" >nul 2>&1
copy "%SOURCE%\gallery_6_1784082299470.png" "public\images\gallery\gallery-6.webp" >nul 2>&1
copy "%SOURCE%\gallery_7_1784082316589.png" "public\images\gallery\gallery-7.webp" >nul 2>&1
copy "%SOURCE%\gallery_8_1784082329172.png" "public\images\gallery\gallery-8.webp" >nul 2>&1
copy "%SOURCE%\gallery_9_1784082341470.png" "public\images\gallery\gallery-9.webp" >nul 2>&1
copy "%SOURCE%\gallery_10_1784082362430.png" "public\images\gallery\gallery-10.webp" >nul 2>&1
copy "%SOURCE%\gallery_11_1784082377507.png" "public\images\gallery\gallery-11.webp" >nul 2>&1
copy "%SOURCE%\gallery_12_1784082390244.png" "public\images\gallery\gallery-12.webp" >nul 2>&1
copy "%SOURCE%\gallery_13_1784082407905.png" "public\images\gallery\gallery-13.webp" >nul 2>&1
copy "%SOURCE%\gallery_14_1784082420752.png" "public\images\gallery\gallery-14.webp" >nul 2>&1
copy "%SOURCE%\gallery_15_1784082432658.png" "public\images\gallery\gallery-15.webp" >nul 2>&1
copy "%SOURCE%\gallery_16_1784082445292.png" "public\images\gallery\gallery-16.webp" >nul 2>&1

echo.
echo Done! All placeholder images copied.
echo ================================================
