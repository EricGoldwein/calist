import subprocess
import os

def create_poster(video_path, output_path, time_offset='00:00:01'):
    """
    Create a poster image from a video using FFmpeg.
    
    Args:
        video_path (str): Path to the input video file
        output_path (str): Path where the poster image will be saved
        time_offset (str): Time offset in the video to capture the frame (HH:MM:SS)
    """
    try:
        # Ensure the output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        # FFmpeg command to extract a frame
        command = [
            'ffmpeg',
            '-i', video_path,
            '-ss', time_offset,
            '-vframes', '1',
            '-q:v', '2',
            output_path
        ]
        
        # Run the command
        subprocess.run(command, check=True)
        print(f"Successfully created poster image: {output_path}")
        
    except subprocess.CalledProcessError as e:
        print(f"Error creating poster image: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Create posters for both videos
create_poster(
    'static/seba_vid_3.mp4',
    'static/seba_vid_3_poster.jpg'
)

create_poster(
    'static/seba_video_masaje.mp4',
    'static/seba_video_masaje_poster.jpg'
) 