    try:
        resp = requests.post(
            self.API_ENDPOINT + "/verify_purchase",
            json={
                "in_app_purchase_data": json.dumps(in_app_purchase_data),
                "purchase_token": purchase_token,
                "product_id": product_id,
                "subscription_option": subscription_option,
            },
            headers={
                "X-API-Key": self.api_key,
                "X-APP-VERSION": app_version,
                "X-DEVICE-ID": device_id,
                "X-PLATFORM": platform,
                "Content-Type": "application/json",
            },
        )

        resp.raise_for_status()

        response_json = resp.json()

        return response_json["result"]

    except requests.exceptions.HTTPError as errh:
        print ("Http Error:",errh)
        return None

    except requests.exceptions.ConnectionError as errc:
        print ("Error Connecting:",errc)
        return None

    except requests.exceptions.Timeout as errt:
        print ("Timeout Error:",errt)
        return None

    except requests.exceptions.RequestException as err:
        print ("Something went wrong",err)
        return None

    except Exception as e:
        print ("Exception",str(e))
        return None
