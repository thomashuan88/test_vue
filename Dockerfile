# Use an official Nginx image as a parent image
FROM nginx:1.19

# Copy the dist folder into the container
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Copy a custom nginx.conf file into the container
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

# Set the default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]